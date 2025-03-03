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
import org.eclipse.dirigible.database.sql.builders.CreateBranchingBuilder;
import org.eclipse.dirigible.database.sql.builders.sequence.CreateSequenceBuilder;

/**
 * The Derby Create Branching Builder.
 */
public class DerbyCreateBranchingBuilder extends CreateBranchingBuilder {

	/**
	 * Instantiates a new derby create branching builder.
	 *
	 * @param dialect
	 *            the dialect
	 */
	public DerbyCreateBranchingBuilder(ISqlDialect dialect) {
		super(dialect);
	}

	/*
	 * (non-Javadoc)
	 * @see org.eclipse.dirigible.database.sql.builders.CreateBranchingBuilder#view(java.lang.String)
	 */
	@Override
	public DerbyCreateViewBuilder view(String view) {
		return new DerbyCreateViewBuilder(this.getDialect(), view);
	}

	/*
	 * (non-Javadoc)
	 * @see org.eclipse.dirigible.database.sql.builders.CreateBranchingBuilder#sequence(java.lang.String)
	 */
	@Override
	public CreateSequenceBuilder sequence(String sequence) {
		return new DerbyCreateSequenceBuilder(this.getDialect(), sequence);
	}

}
