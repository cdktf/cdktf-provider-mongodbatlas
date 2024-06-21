# `dataMongodbatlasFederatedSettingsIdentityProviders` Submodule <a name="`dataMongodbatlasFederatedSettingsIdentityProviders` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsIdentityProviders <a name="DataMongodbatlasFederatedSettingsIdentityProviders" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers mongodbatlas_federated_settings_identity_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  id: str = None,
  idp_types: typing.List[str] = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None,
  protocols: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProviders#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#id DataMongodbatlasFederatedSettingsIdentityProviders#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.idpTypes">idp_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#idp_types DataMongodbatlasFederatedSettingsIdentityProviders#idp_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#items_per_page DataMongodbatlasFederatedSettingsIdentityProviders#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#page_num DataMongodbatlasFederatedSettingsIdentityProviders#page_num}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#protocols DataMongodbatlasFederatedSettingsIdentityProviders#protocols}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProviders#federation_settings_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#id DataMongodbatlasFederatedSettingsIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_types`<sup>Optional</sup> <a name="idp_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.idpTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#idp_types DataMongodbatlasFederatedSettingsIdentityProviders#idp_types}.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.itemsPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#items_per_page DataMongodbatlasFederatedSettingsIdentityProviders#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.pageNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#page_num DataMongodbatlasFederatedSettingsIdentityProviders#page_num}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#protocols DataMongodbatlasFederatedSettingsIdentityProviders#protocols}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetIdpTypes">reset_idp_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetItemsPerPage">reset_items_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetPageNum">reset_page_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetProtocols">reset_protocols</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_types` <a name="reset_idp_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetIdpTypes"></a>

```python
def reset_idp_types() -> None
```

##### `reset_items_per_page` <a name="reset_items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetItemsPerPage"></a>

```python
def reset_items_per_page() -> None
```

##### `reset_page_num` <a name="reset_page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetPageNum"></a>

```python
def reset_page_num() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.resetProtocols"></a>

```python
def reset_protocols() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsIdentityProviders to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasFederatedSettingsIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idpTypesInput">idp_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.itemsPerPageInput">items_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.pageNumInput">page_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idpTypes">idp_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.results"></a>

```python
results: DataMongodbatlasFederatedSettingsIdentityProvidersResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsList</a>

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_types_input`<sup>Optional</sup> <a name="idp_types_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idpTypesInput"></a>

```python
idp_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_per_page_input`<sup>Optional</sup> <a name="items_per_page_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.itemsPerPageInput"></a>

```python
items_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num_input`<sup>Optional</sup> <a name="page_num_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.pageNumInput"></a>

```python
page_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_types`<sup>Required</sup> <a name="idp_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.idpTypes"></a>

```python
idp_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `page_num`<sup>Required</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProviders.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsIdentityProvidersConfig <a name="DataMongodbatlasFederatedSettingsIdentityProvidersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  id: str = None,
  idp_types: typing.List[str] = None,
  items_per_page: typing.Union[int, float] = None,
  page_num: typing.Union[int, float] = None,
  protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProviders#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#id DataMongodbatlasFederatedSettingsIdentityProviders#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.idpTypes">idp_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#idp_types DataMongodbatlasFederatedSettingsIdentityProviders#idp_types}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#items_per_page DataMongodbatlasFederatedSettingsIdentityProviders#items_per_page}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.pageNum">page_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#page_num DataMongodbatlasFederatedSettingsIdentityProviders#page_num}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#protocols DataMongodbatlasFederatedSettingsIdentityProviders#protocols}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProviders#federation_settings_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#id DataMongodbatlasFederatedSettingsIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_types`<sup>Optional</sup> <a name="idp_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.idpTypes"></a>

```python
idp_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#idp_types DataMongodbatlasFederatedSettingsIdentityProviders#idp_types}.

---

##### `items_per_page`<sup>Optional</sup> <a name="items_per_page" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#items_per_page DataMongodbatlasFederatedSettingsIdentityProviders#items_per_page}.

---

##### `page_num`<sup>Optional</sup> <a name="page_num" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.pageNum"></a>

```python
page_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#page_num DataMongodbatlasFederatedSettingsIdentityProviders#page_num}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.2/docs/data-sources/federated_settings_identity_providers#protocols DataMongodbatlasFederatedSettingsIdentityProviders#protocols}.

---

### DataMongodbatlasFederatedSettingsIdentityProvidersResults <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResults()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo()
```


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.roleMappings">role_mappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.userConflicts">user_conflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_allow_list`<sup>Required</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.domainAllowList"></a>

```python
domain_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.domainRestrictionEnabled"></a>

```python
domain_restriction_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `post_auth_role_grants`<sup>Required</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.postAuthRoleGrants"></a>

```python
post_auth_role_grants: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_mappings`<sup>Required</sup> <a name="role_mappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.roleMappings"></a>

```python
role_mappings: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList</a>

---

##### `user_conflicts`<sup>Required</sup> <a name="user_conflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.userConflicts"></a>

```python
user_conflicts: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgs</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName">external_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments">role_assignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments"></a>

```python
role_assignments: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappings</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsRoleMappingsRoleAssignments</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflictsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsUserConflicts</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.acsUrl">acs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.associatedDomains">associated_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.associatedOrgs">associated_orgs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.audienceUri">audience_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.idpId">idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.idpType">idp_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.oktaIdpId">okta_idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.pemFileInfo">pem_file_info</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.requestBinding">request_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.requestedScopes">requested_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.ssoDebugEnabled">sso_debug_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.userClaim">user_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResults">DataMongodbatlasFederatedSettingsIdentityProvidersResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acs_url`<sup>Required</sup> <a name="acs_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.acsUrl"></a>

```python
acs_url: str
```

- *Type:* str

---

##### `associated_domains`<sup>Required</sup> <a name="associated_domains" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.associatedDomains"></a>

```python
associated_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_orgs`<sup>Required</sup> <a name="associated_orgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.associatedOrgs"></a>

```python
associated_orgs: DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsAssociatedOrgsList</a>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `audience_uri`<sup>Required</sup> <a name="audience_uri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.audienceUri"></a>

```python
audience_uri: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

---

##### `idp_type`<sup>Required</sup> <a name="idp_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.idpType"></a>

```python
idp_type: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `okta_idp_id`<sup>Required</sup> <a name="okta_idp_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.oktaIdpId"></a>

```python
okta_idp_id: str
```

- *Type:* str

---

##### `pem_file_info`<sup>Required</sup> <a name="pem_file_info" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.pemFileInfo"></a>

```python
pem_file_info: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_binding`<sup>Required</sup> <a name="request_binding" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.requestBinding"></a>

```python
request_binding: str
```

- *Type:* str

---

##### `requested_scopes`<sup>Required</sup> <a name="requested_scopes" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.requestedScopes"></a>

```python
requested_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_signature_algorithm`<sup>Required</sup> <a name="response_signature_algorithm" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

---

##### `sso_debug_enabled`<sup>Required</sup> <a name="sso_debug_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.ssoDebugEnabled"></a>

```python
sso_debug_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_claim`<sup>Required</sup> <a name="user_claim" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.userClaim"></a>

```python
user_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResults">DataMongodbatlasFederatedSettingsIdentityProvidersResults</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificates</a>

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_providers

dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.certificates"></a>

```python
certificates: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoCertificatesList</a>

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProviders.DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProvidersResultsPemFileInfo</a>

---



