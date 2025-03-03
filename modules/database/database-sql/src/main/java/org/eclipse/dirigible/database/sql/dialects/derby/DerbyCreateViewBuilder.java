/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
package org.eclipse.dirigible.database.sql.dialects.derby;

import org.eclipse.dirigible.database.sql.ISqlDialect;
import org.eclipse.dirigible.database.sql.builders.view.CreateViewBuilder;

/**
 * The Derby Create View Builder.
 */
public class DerbyCreateViewBuilder extends CreateViewBuilder {

	private String values = null;

	/**
	 * Instantiates a new derby create view builder.
	 *
	 * @param dialect
	 *            the dialect
	 * @param view
	 *            the view
	 */
	public DerbyCreateViewBuilder(ISqlDialect dialect, String view) {
		super(dialect, view);
	}

	/*
	 * (non-Javadoc)
	 * @see org.eclipse.dirigible.database.sql.builders.view.CreateViewBuilder#column(java.lang.String)
	 */
	@Override
	public DerbyCreateViewBuilder column(String name) {
		super.getColumns().add(name);
		return this;
	}

	/*
	 * (non-Javadoc)
	 * @see org.eclipse.dirigible.database.sql.builders.view.CreateViewBuilder#asSelect(java.lang.String)
	 */
	@Override
	public DerbyCreateViewBuilder asSelect(String select) {
		if (this.values != null) {
			throw new IllegalStateException("Create VIEW can use either AS SELECT or AS VALUES, but not both.");
		}
		setSelect(select);
		return this;
	}

	/**
	 * As values.
	 *
	 * @param values
	 *            the values
	 * @return the derby create view builder
	 */
	public DerbyCreateViewBuilder asValues(String values) {
		if (getSelect() != null) {
			throw new IllegalStateException("Create VIEW can use either AS SELECT or AS VALUES, but not both.");
		}
		this.values = values;
		return this;
	}

	/*
	 * (non-Javadoc)
	 * @see org.eclipse.dirigible.database.sql.builders.view.CreateViewBuilder#generate()
	 */
	@Override
	public String generate() {

		StringBuilder sql = new StringBuilder();

		// CREATE
		generateCreate(sql);

		// VIEW
		generateView(sql);

		// COLUMNS
		generateColumns(sql);

		// SELECT or VALUES
		if (getSelect() != null) {
			generateAsSelect(sql);
		} else if (this.values != null) {
			generateAsValues(sql);
		} else {
			throw new IllegalStateException("Create VIEW must use either AS SELECT or AS VALUES.");
		}

		return sql.toString();
	}

	/**
	 * Generate as values.
	 *
	 * @param sql
	 *            the sql
	 */
	protected void generateAsValues(StringBuilder sql) {
		sql.append(SPACE).append(KEYWORD_AS).append(SPACE).append(KEYWORD_VALUES).append(SPACE).append(this.values);
	}

}
